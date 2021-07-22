import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';
import { Products } from './products.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query((returns) => [Products])
  products(): Promise<Products[]> {
    return this.productsService.findAll();
  }

  @Query((returns) => Products)
  getProduct(@Args('id', { type: () => Int }) id: number): Promise<Products> {
    return this.productsService.findOne(id);
  }

  @Query((returns) => [Products])
  getProductByTitle(
    @Args('title', { type: () => String }) title: string
  ): Promise<Products[]> {
    return this.productsService.findByTitle(title);
  }

  @Mutation((returns) => Products)
  createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput
  ): Promise<Products> {
    return this.productsService.createProduct(createProductInput);
  }

  @Mutation((returns) => Products)
  removeProductById(@Args('id', { type: () => Int }) id: number) {
    const removingProduct: Products = this.productsService.findOne(id);
    this.productsService.removeProduct(id);
    return removingProduct;
  }
}
