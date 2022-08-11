import {
    Entity,
    BaseEntity,
    PrimaryColumn,
    Column,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { NotesEntity } from './Notes';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(type => NotesEntity, notes => notes.user)
    @JoinColumn({ name: 'notes_id', referencedColumnName: 'id' })
    notes?: NotesEntity[];

    constructor(
        email: string,
        password: string
    ) {
        super();
        this.email = email;
        this.password = password;
    }
}