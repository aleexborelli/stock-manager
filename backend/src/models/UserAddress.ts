import {
 Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn,
} from 'typeorm';
import User from './User';

@Entity('user_address')
class UserAddress {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => User, (user) => user.addresses)
  user_id: User;

  @Column()
  logradouro: string;

  @Column()
  numero: string;

  @Column({
    nullable: true,
  })
  complemento: string;

  @Column()
  cidade: string;

  @Column()
  cep: number;

  @Column()
  estado: string;

  @Column({
    default: true,
  })
  ind_ativo: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default UserAddress;
