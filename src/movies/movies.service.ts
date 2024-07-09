import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Movie } from 'src/entities/movie.entity';
import { ILike, Repository } from 'typeorm';
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

   async getAllMovies(query:string):Promise<Movie[]>{
       return this.movieRepo.find()
    }

    async searchMovies(query: string): Promise<Movie[]> {
        return this.movieRepo.find({
          where: {
            title: ILike(`%${query}%`),
          },
        });
      }

      async filterMovies(
        title?: string,
        genre?: string,
        director?: string,
        releaseYear?: number,
      ): Promise<Movie[]> {
        const filterCriteria: any = {};
    
        if (title) {
          filterCriteria.title = ILike(`%${title}%`);
        }
        if (genre) {
          filterCriteria.genre = ILike(`%${genre}%`);
        }
        if (director) {
          filterCriteria.director = ILike(`%${director}%`);
        }
        if (releaseYear) {
          filterCriteria.releaseYear = releaseYear;
        }
    
        return this.movieRepo.find({
          where: filterCriteria,
        });
      }

      async sortMovies(sortBy: string, sortOrder: 'ASC' | 'DESC'): Promise<Movie[]> {
    const validSortFields = ['title', 'genre', 'director', 'releaseYear'];
    if (!validSortFields.includes(sortBy)) {
      throw new Error(`Invalid sort field: ${sortBy}. Valid fields are: ${validSortFields.join(', ')}`);
    }

    return this.movieRepo.find({
      order: {
        [sortBy]: sortOrder
      },
    });
  }


}
