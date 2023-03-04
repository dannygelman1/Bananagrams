import { ObjectType, Field } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql/dist/scalars';
import { Entity } from 'typeorm/decorator/entity/Entity';
import { Column } from 'typeorm/decorator/columns/Column';
import { CreateDateColumn } from 'typeorm/decorator/columns/CreateDateColumn';

import { PrimaryGeneratedColumn } from 'typeorm/decorator/columns/PrimaryGeneratedColumn';
import { UpdateDateColumn } from 'typeorm/decorator/columns/UpdateDateColumn';

@ObjectType()
@Entity('boxes')
export class Box {
  @Field(() => ID, { description: 'ID of the box.' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field({ description: 'ID of the game.' })
  @Column({ name: 'game_id' })
  game_id!: string;

  @Field({ description: 'Letter in the box.', nullable: true })
  @Column({ name: 'letter', nullable: true })
  letter?: string;

  @Field({ description: 'Clue for the box.', nullable: true })
  @Column({ name: 'clue', nullable: true })
  clue?: string;

  @Field({ description: 'X position of the box.' })
  @Column({ name: 'x' })
  x!: number;

  @Field({ description: 'Y position of the box.' })
  @Column({ name: 'y' })
  y!: number;

  @Field({ description: 'Whether or not the box is a block.' })
  @Column({ name: 'isblock' })
  isblock!: boolean;

  @Field({ description: 'Creation timestamp of the game.' })
  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt!: Date;

  @Field({ description: 'Last updated timestamp of the game.' })
  @UpdateDateColumn({ name: 'updated_at', type: 'timestamptz' })
  updatedAt!: Date;
}
