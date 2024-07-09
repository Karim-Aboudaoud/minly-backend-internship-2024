import { generateUuid7 } from "src/utils/uuid7"
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"

@Entity()
export class Movie {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"varchar",length:200})
    title: string

    @Column({type:"timestamptz"})
    releaseDate: Date

    @Column({type:"varchar",nullable:true})
    poster: string

    @Column({type:"float",nullable:true})
    averageRating: number

    @Column({type:"timestamptz"})
    created_at: Date

    @Column({type:"timestamptz"})
    updated_at: Date
    
    
    @Column({type:"bigint"})
    director_id: string

    @Column({type:"varchar",length:200,nullable:true})
    trailer: string

    @Column({type:"varchar"})
    uuid: string
    @BeforeInsert()
    generateId() {
      this.uuid = generateUuid7 ();
    }
}


