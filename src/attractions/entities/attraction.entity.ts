import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Attraction {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    description: string;
    
    @Column()
    coverimage: string;
    
    @Column("decimal", { precision: 10, scale: 8, default: 0, name: "latitude" })
    latitude: number;

    @Column("decimal", { precision: 11, scale: 8, default: 0, name: "longitude" })
    longitude: number;
}
