import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity()
export class Slide {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    pic: string;
    @Column()
    order: number;
}
