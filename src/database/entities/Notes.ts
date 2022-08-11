import {
    Entity,
    BaseEntity,
    PrimaryColumn,
    Column,
    ManyToOne
} from 'typeorm';
import { UserEntity } from './User';

@Entity({ name: 'notes' })
export class NotesEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(type => UserEntity, user => user.notes)
    user?: UserEntity;

    constructor(
        description: string,
        date: Date
    ) {
        super();
        this.description = description;
        this.date = date;
    }
}