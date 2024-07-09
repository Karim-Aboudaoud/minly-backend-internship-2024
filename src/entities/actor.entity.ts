import { generateUuid7 } from "src/utils/uuid7"
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"

@Entity()
export class Actor {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"varchar",length:200})
    first_name: string

    @Column({type:"varchar",length:200})
    last_name: string

    @Column({type:"timestamptz"})
    birthdate: Date

    @Column({type:"varchar",length:1000})
    bio: string

    @Column({type:"varchar"})
    gender: string

    @Column({type:"varchar",nullable:true})
    nationality: string

    @Column({type:"bigint"})
    uuid: string
    
    @BeforeInsert()
    generateId() {
      this.uuid = generateUuid7();
    }

    @Column({type:"varchar",nullable:true})
    picture: string

    @Column({type:'bigint',nullable:true})
     number_of_awards:number
    
     @Column({type:"timestamptz"})
     created_at: Date
 
     @Column({type:"timestamptz"})
     updated_at: Date

}