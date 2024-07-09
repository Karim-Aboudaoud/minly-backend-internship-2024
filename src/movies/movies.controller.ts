import { Body, Controller, Get, Post, Req, Query } from '@nestjs/common';
import { Request } from 'express';
import { MoviesService } from './movies.service';
import { Movie } from 'src/entities/movie.entity';
import { CreateDto } from './dtos/createmovie';
import { title } from 'process';

@Controller('movies')
export class MoviesController {
    constructor(private movieService:MoviesService){}
    @Post()
   async create(@Body() createDto: CreateDto): Promise<Movie> {
      return await this.movieService.createMovie(createDto);
    }

 @Get()
 async findAll(@Query('search') query: string,@Query('filter') filter: string,@Query('sortBy') sort: string, @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC'): Promise<Movie[]> {
      return await this.movieService.getAllMovies(query);
       this.movieService.filterMovies(filter);
       this.movieService.sortMovies(sort,sortOrder);
 }

    }
