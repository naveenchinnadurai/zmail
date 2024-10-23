"use client";

import EmailDetail from "@/components/emailDetails";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { email } from "@/lib/data";
import { EmailType } from "@/lib/types";
import { Archive, Archive as ArchiveIcon, Bookmark, Clock, File, Folder, Inbox, MessageSquare, Search, Settings, ShoppingCart, Star, Trash, Trash2, Users, } from "lucide-react";
import { useState } from "react";

const Page = () => {

  const [emailContent, setEmailContent] = useState<EmailType>(email[0]);
  return (
    <div className="bg-black flex text-white h-screen overflow-hidden p-4">
      <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <Card className="bg-transparent text-white h-full w-full border-r-0 rounded-tr-none rounded-br-none border-zinc-800">
            <CardHeader className="px-0">
              <CardTitle className="border-b border-zinc-800 pb-3">
                <Button variant="ghost" className="w-full justify-between">
                  <span className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4" /> Alicia Koch
                  </span>
                  <Settings size={16} />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent className="h-full px-2">
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Inbox className="mr-2 h-4 w-4" /> Inbox{" "}
                <span className="ml-auto">128</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <File className="mr-2 h-4 w-4" /> Drafts{" "}
                <span className="ml-auto">9</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Star className="mr-2 h-4 w-4" /> Starred
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Archive className="mr-2 h-4 w-4" /> Archived
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Trash className="mr-2 h-4 w-4" /> Spam
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Trash className="mr-2 h-4 w-4" /> Trash
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Archive className="mr-2 h-4 w-4" /> Archive
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Bookmark className="mr-2 h-4 w-4" /> Social{" "}
                <span className="ml-auto">972</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Users className="mr-2 h-4 w-4" /> Updates{" "}
                <span className="ml-auto">342</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <Folder className="mr-2 h-4 w-4" /> Forums{" "}
                <span className="ml-auto">128</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start mb-1">
                <ShoppingCart className="mr-2 h-4 w-4" /> Shopping{" "}
                <span className="ml-auto">8</span>
              </Button>
              <Button variant="ghost" className="w-full justify-start">
                <Folder className="mr-2 h-4 w-4" /> Promotions{" "}
                <span className="ml-auto">21</span>
              </Button>
            </CardContent>
            </Card>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <Card className="bg-transparent rounded-t-none rounded-b-none w-full h-full  border-zinc-800">
              <CardHeader className="text-white px-0">
                <CardTitle className="border-b px-4 border-zinc-800 pb-3 flex justify-between items-center">
                  <span className="text-xl font-bold">Inbox</span>
                  <div>
                    <Button variant="ghost">
                      <Search className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ArchiveIcon className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Clock className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Input placeholder="Search" className="mb-4 text-gray-400 border-zinc-800" />
                <ScrollArea className="h-full">
                  {
                    email.map(
                      (item, index) => (
                        <Card key={index} className="hover:bg-zinc-100 mb-4 border-zinc-800 hover:bg-opacity-10 cursor-pointer bg-transparent text-white" onClick={() => setEmailContent(item)}>
                          <CardHeader className="pt-4 pb-0">
                            <CardTitle className="text-sm flex justify-between font-normal">
                              <div className="flex flex-col justify-between gap-1">
                                <span className="text-sm font-bold">{item.from}</span>
                                <span>{item.title}</span>
                              </div>
                              <span className="text-gray-400"> Oct 22, 2023, 9:00:00 AM </span>
                            </CardTitle> 
                          </CardHeader>
                          <CardContent className="my-0">
                            <p className="my-2 text-sm">{item.text[0].slice(0, 80)}...</p>
                            <div className="space-x-2">
                              {
                                item.buttonText.map((e, i) => {
                                  return (
                                    <Button className={`px-6 py-1 text-sm ${i % 2 == 0 ? "text-white " : "text-black bg-white"}`}>{e}</Button>
                                  )
                                })
                              }
                            </div>
                          </CardContent>
                        </Card>
                      )
                    )
                  }
                </ScrollArea>
              </CardContent>
            </Card>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="h-full">
            <EmailDetail from={emailContent.from} title={emailContent.from} text={emailContent.text} buttonText={emailContent.buttonText} time={emailContent.time} />
          </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
};

export default Page;
