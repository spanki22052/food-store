import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductInput } from './create-product.input';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  createProduct(createProductInput: CreateProductInput): Promise<Products> {
    const newProduct = this.productsRepository.create(createProductInput);

    return this.productsRepository.save(newProduct);
  }

  async findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  findOne(id: number): Promise<Products> {
    return this.productsRepository.findOneOrFail(id);
  }

  async removeProduct(id: number) {
    await this.productsRepository.delete({ id });
    return this.productsRepository.find({ id: id });
  }

  findByTitle(title: string): Promise<Products[]> {
    return this.productsRepository.find({ title: title });
  }
}
