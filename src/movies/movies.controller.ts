import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { MoviesService } from './movies.service';
import { Movie } from 'src/entities/movie.entity';
import { CreateDto } from './dtos/createmovie';

@Controller('movies')
export class MoviesController {
    constructor(private movieService:MoviesService){}
    @Post()
   async create(@Body() createDto: CreateDto): Promise<Movie> {
      return await this.movieService.createMovie(createDto);
    }

 @Get()
 async getAllMovies
    }
