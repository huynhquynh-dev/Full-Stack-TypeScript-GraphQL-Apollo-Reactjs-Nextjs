import { Field, ID, ObjectType } from 'type-graphql'
import {BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm'

@Entity()
@ObjectType()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    @Field(__type => ID)
    id!: number

    @Column({unique: true})
    @Field()
    username!: string
    
    @Column({unique: true})
    @Field()
    email!: string
    
    @Column({unique: true})
    password!: string
    
    @CreateDateColumn()
    @Field()
    createAt: Date

    @UpdateDateColumn()
    @Field()
    updateAt: Date
}