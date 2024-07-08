import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/entities/movie.entity';
import { Repository } from 'typeorm';
import { CreateDto } from './dtos/createmovie';

@Injectable()
export class MoviesService {
    constructor(
        @InjectRepository(Movie)
    private movieRepo: Repository<Movie>) {}
    
        async createMovie(dto:CreateDto):Promise<Movie>{
  const movie= this.movieRepo.create(dto)
     return await this.movieRepo.save(movie)
    }



    
}
