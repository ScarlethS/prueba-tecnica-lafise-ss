import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface InputSelectProps {
  label?: string;
  options?: string[];
}

const InputSelect = ({ label, options }: InputSelectProps) => {
  return (
    <section className="m-4">
      <label className="block mb-2 text-sm font-medium text-gray-900 ">
        {label}
      </label>
      <Select>
        <SelectTrigger className="w-full lg:w-[428px] py-[27px] rounded">
          <SelectValue placeholder="Entre cuentas propias" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">{options}Terceros Lafise</SelectItem>
          <SelectItem value="dark">Terceros Regional</SelectItem>
          <SelectItem value="system">Banco Local</SelectItem>
        </SelectContent>
      </Select>
    </section>
  );
};

export default InputSelect;
