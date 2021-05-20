import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./User";

// higherTeaching = Magistério superior
// teachingOfBasicAndTech = Magistério do ensino básico, técnico e tecnológico
// technicalAdmEducation = Técnico-administrativo em educação
export enum Carrer {
  higherTeaching = "magistério superior",
  teachingOfBasicAndTech = "magistério do ensino básico, técnico e tecnológico",
  technicalAdmEducation = "técnico-administrativo em educação"
}

export enum Modality {
  presential = "presencial",
  hybrid = "híbrido",
  telecommuting = "teletrabalho"
}

@Entity('publicService')
class PublicService {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  institution: string;

  @Column()
  yearOfStart: number;

  @Column({type: 'text', nullable: false})
  career: Carrer;

  @Column()
  sector: string;

  @Column({type: 'text', nullable: false})
  modalityOfWork: Modality;

  @Column()
  user_id: string;

  @OneToOne(type => User, publicService => PublicService)
  @JoinColumn()
  user: User

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


}

export default PublicService;