import { DivForm, SectionDays, Options } from "./style";

export default function FormHabit(){
  return(
    <DivForm>
      <input type="text" placeholder="nome do hábito"/>
      <SectionDays>
        <div>D</div>
        <div>S</div>
        <div>T</div>
        <div>Q</div>
        <div>Q</div>
        <div>S</div>
        <div>S</div>
      </SectionDays>

      <Options>
        <div>Cancelar</div>
        <div>Salvar</div>
      </Options>
    </DivForm>
  );
}
