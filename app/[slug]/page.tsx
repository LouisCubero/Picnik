"use client";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import Link from "next/link";
import { Download, File, FileUp, Upload, UserPlus } from "lucide-react";
import { useQRCode } from "next-qrcode";
import { FileUpload } from "@ark-ui/react";

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
              <Canvas text={`https://picnick.tech/${params.slug}`} />

              <p className="text-popover-foreground">
                https://picnick.tech/{params.slug}
              </p>
            </div>
          </PopoverContent>
        </Popover>
        {/* <input type="file" /> */}
        <FileUpload.Root
          maxFiles={1}
          onFileAccept={(details) => {
            console.log("hello");
            details.files.forEach(async (file) => {
              await fetch(
                "https://picnick-upload.cameronscottwills.workers.dev",
                {
                  headers: { key: `${params.slug}` },
                  method: "POST",
                  body: file,
                }
              );
              console.log(file);
            }, details);
          }}
        >
          <FileUpload.Label />
          <FileUpload.Dropzone>
            <Button>
              <Upload className="h-4 w-4" />
            </Button>
          </FileUpload.Dropzone>
          <FileUpload.Trigger />
          <FileUpload.ItemGroup>
            {(files) =>
              files.map((file, id) => (
                <FileUpload.Item key={id} file={file}></FileUpload.Item>
              ))
            }
          </FileUpload.ItemGroup>
        </FileUpload.Root>
      </div>
    </main>
  );
}
