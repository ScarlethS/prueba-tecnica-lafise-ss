import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";

interface InputSelectProps<T extends FieldValues> {
  label?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options?: any[];
  control: Control<T>;
  name: Path<T>;
  placeholder?: string;
  className?: string;
}

const InputSelect = <T extends FieldValues>({
  label,
  options = [],
  control,
  name,
  placeholder,
  className,
}: InputSelectProps<T>) => {
  return (
    <section className="m-4">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Select
                {...field}
                onValueChange={field.onChange}
                value={field.value}
              >
                <SelectTrigger className={`${className} w-full rounded `}>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {options.map((option) => (
                    <SelectItem key={option?.value} value={option?.value}>
                      {option?.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </section>
  );
};

export default InputSelect;
