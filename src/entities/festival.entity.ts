import { generateUuid7 } from "src/utils/uuid7"
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert, ManyToMany, JoinTable } from "typeorm"
import { Movie } from "./movie.entity"

@Entity()
export class Festival {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type:"varchar",length:200})
    title: string

    @Column({type:"timestamptz"})
    date: Date
    
    @Column({type:"varchar"})
    uuid: string
    movies: any
    @BeforeInsert()
    generateId() {
      this.uuid = generateUuid7 ();
    }
    @ManyToMany(() => Movie, movie => movie.festivals)
    @JoinTable({
      name: 'movie_festival',
      joinColumn: { name: 'festival_id', referencedColumnName: 'id' },
      inverseJoinColumn: { name: 'movie_id', referencedColumnName: 'id' },
    })
    movie: Movie[];
}