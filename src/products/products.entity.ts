import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Products {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number;

  @Column()
  @Field()
  title: string;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  price: number;
}
