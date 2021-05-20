import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne
} from 'typeorm';
import PublicService from './PublicService';

export enum Gender {
  male = "masculino",
  female = "feminino",
  other = "outro"
}

export enum martialStatus {
  single = "solteiro",
  married = "casado",
  commonLawMarriage = "união estável",
  divorced = "divorciado"
}

@Entity('users')
/*
uso do Entity indica o model que será salvo
no banco de dados (dentro da tabela users)
*/
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  login: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  age: Number

  @Column({type: 'int', nullable: false})
  gender: Gender;
  
  @Column({type: 'int', nullable: false})
  martialStatus: martialStatus;

  @Column()
  isPregnant: boolean;

  @Column()
  isLactating: boolean;
  
  @OneToOne(type => PublicService, user => User)
  publicService: PublicService

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
