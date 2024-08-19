import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Source {
	@PrimaryGeneratedColumn('uuid')
	id: string;

	@Column()
	url: string;

	@Column()
	haku: boolean;

	@Column()
	proxy: boolean;

	@Column()
	sourceCode: number;
}
