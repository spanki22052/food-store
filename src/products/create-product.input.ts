import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  title: string;

  @Field()
  price: number;

  @Field()
  description: string;
}
