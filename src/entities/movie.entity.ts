import { generateUuid7 } from "src/utils/uuid7"
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert,OneToMany, ManyToOne, ManyToMany, JoinTable } from "typeorm"
import { Director } from "./director.entity"
import { Actor } from "./actor.entity"
import { Festival } from "./festival.entity"

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
    
    @Column({type:"varchar",length:200,nullable:true})
    trailer: string

    @Column({type:"varchar"})
    uuid: string
    @BeforeInsert()
    generateId() {
      this.uuid = generateUuid7 ();
    }
    @ManyToOne(() => Director, (director) => director.movies)
  director_id: Director;

  @ManyToMany(() => Actor, actor => actor.movies, { cascade: true })
  @JoinTable()
  actor: Actor[];
 
  @ManyToMany(() => Actor, actor => actor.movies)
  @JoinTable({
    name: 'movie_actor',
    joinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'actor_id', referencedColumnName: 'id' },
  })
  actors: Actor[];
  @ManyToMany(() => Festival, festival => festival.movies)
  festivals: Festival[];
}


