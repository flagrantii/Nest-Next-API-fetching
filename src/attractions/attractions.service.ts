import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';
import { Attraction } from './entities/attraction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AttractionsService {
  constructor(
    @InjectRepository(Attraction)
    private attractionsRepository: Repository<Attraction>,
  ) {}

  create(createAttractionDto: CreateAttractionDto) {
    return this.attractionsRepository.save(createAttractionDto);
  }

  findAll() {
    return this.attractionsRepository.find();
  }

  findOne(id: number) {
    return this.attractionsRepository.findOneBy({ id });
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return this.attractionsRepository.update(id, updateAttractionDto);
  }

  remove(id: number) {
    return this.attractionsRepository.delete(id);
  }
}
