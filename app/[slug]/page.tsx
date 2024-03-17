"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { Download, Upload, UserPlus } from "lucide-react";
import { useQRCode } from "next-qrcode";

export const runtime = "edge";

export default function Page({ params }: { params: { slug: string } }) {
  const { Canvas } = useQRCode();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-black">
        Pic
        <br />
        Nick
      </h1>
      <p className="text-lg">Upload your photos</p>
      <p className="text-md">{params.slug}</p>
      <div className="relative">
        <img
          className="rounded-lg m-4"
          src="https://static.wikia.nocookie.net/silly-cat/images/4/4d/Mr._Fresh.png/"
          width={360}
          height={360}
          alt={"Mr. Fresh Cat"}
        />
        <Button className="absolute bottom-8 right-8">
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex space-x-4">
        <Popover>
          <PopoverTrigger>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite to Group
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <Canvas text={`https://picnick.com/${params.slug}`} />

              <p className="text-popover-foreground">
                https://picnick.com/{params.slug}
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Button>
          <Upload className="h-4 w-4" />
        </Button>
      </div>
    </main>
  );
}
