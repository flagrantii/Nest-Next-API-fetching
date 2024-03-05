import { Injectable } from '@nestjs/common';
import { CreateAttractionDto } from './dto/create-attraction.dto';
import { UpdateAttractionDto } from './dto/update-attraction.dto';

@Injectable()
export class AttractionsService {
  create(createAttractionDto: CreateAttractionDto) {
    return 'This action adds a new attraction';
  }

  findAll() {
    return `This action returns all attractions`;
  }

  findOne(id: number) {
    return `This action returns a #${id} attraction`;
  }

  update(id: number, updateAttractionDto: UpdateAttractionDto) {
    return `This action updates a #${id} attraction`;
  }

  remove(id: number) {
    return `This action removes a #${id} attraction`;
  }
}
