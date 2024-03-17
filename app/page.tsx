import { Button } from "@/components/ui/button"
import Image from "next/image";
import { Plus } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-black">Pic<br/>Nick</h1>
      <p className="text-lg">
        Live in the moment with PicNick.
      </p>
      <div className="flex space-x-4">
        <Button variant="default"><Plus className="mr-2 h-4 w-4" />Create Group</Button>
      </div>
    </main>
  );
}
