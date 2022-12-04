import {
  Entity,
  AfterRemove,
  AfterInsert,
  AfterUpdate,
  Column,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;

  @Column()
  password: string;

  @AfterInsert()
  logInsert() {
    console.log('Inserted User with id', this.id);
  }
  @AfterUpdate()
  logAfterUpdate() {
    console.log('AfterUpdateed User with id', this.id);
  }
}
