import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentShowcase } from "./ComponentShowcase";

const code = `import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function InputDemo() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  )
}
`;

export const InputDemoContent: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-full h-full min-h-[150px]">
      <div className="grid w-full max-w-xs items-center gap-1.5">
        <Label htmlFor="email-demo">Email</Label>
        <Input type="email" id="email-demo" placeholder="Email" />
      </div>
    </div>
  );
};

export function InputDemo() {
  return (
    <ComponentShowcase title="Input" code={code}>
      <InputDemoContent />
    </ComponentShowcase>
  );
}
