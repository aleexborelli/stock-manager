import {
  CreateDateColumn, Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, OneToMany,
} from 'typeorm';
import UserAddress from './UserAddress';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  id:string;

  @Column()
  name: string;

  @Column({
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @OneToMany(() => UserAddress, (user_address) => user_address.user_id)
  addresses: UserAddress[];

  @Column({
    default: true,
  })
  active: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
