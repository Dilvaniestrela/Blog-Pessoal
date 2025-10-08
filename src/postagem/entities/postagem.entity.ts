import { IsNotEmpty } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Postagem } from "../../postagem/entities/postagem.entity";

@Entity({name: "tb_postagens"})
export class Postagem {

    @PrimaryGeneratedColumn()
    id: number  

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    titulo: string  

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    texto: string

    @UpdateDateColumn()
    data: Date

    @Entity({name: "tb_temas"})
export class Tema {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string

    @OneToMany(() => Postagem, (postagem) => postagem.tema)
    postagem: Postagem[]
    
}
}