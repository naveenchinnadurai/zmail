import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, MoreVertical, Trash2, Clock, RotateCcw } from 'lucide-react';
import { EmailType } from '@/lib/types';
import { getLetters } from '@/lib/utils';
import { Toggle } from './ui/toggle';

const EmailDetail: React.FC<EmailType> = ({ from, title, text }) => {
  return (
    <div className="bg-black text-white h-full">
      <Card className="flex flex-col bg-transparent h-full border-zinc-800 rounded-tl-none rounded-bl-none border-l-0">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 text-white">
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><Clock className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><RotateCcw className="h-4 w-4" /></Button>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon"><ArrowLeft className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><ArrowRight className="h-4 w-4" /></Button>
            <Button variant="ghost" size="icon"><MoreVertical className="h-4 w-4" /></Button>
          </div>
        </CardHeader>
        <CardContent className='text-white p-0'>
          <div className="flex items-start space-x-4 p-4 border-zinc-800 border-b border-t">
            <Avatar>
              <AvatarFallback className='bg-slate-900'>{getLetters(from)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="text-lg font-semibold">{from}</CardTitle>
              <p className="text-sm text-gray-400">{title}</p>
              <p className="text-xs text-gray-500">Reply-To: williamsmith@example.com</p>
            </div>
            <p className="text-xs text-gray-500">Oct 22, 2023, 9:00:00 AM</p>
          </div>
          <div className="space-y-4 p-4">
            {
              text.map((e, i) => {
                return (
                  <p key={i} className='text-sm' >{e}</p>
                )
              })
            }
          </div>
        </CardContent>
        <CardFooter className="flex flex-col h-full items-stretch pt-6 justify-end">
          <Textarea
            placeholder={`Reply ${from}...`}
            className="bg-transparent border-zinc-800 mb-2 h-20"
          />
          <div className="flex justify-between items-center">
            <div className="gap-2 flex items-center justify-center">
              <Toggle className='h-2 w-10 !py-2 ' />
              <p className='text-sm text-white '> Mute this thread </p>
            </div>
            <Button> Send </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EmailDetail;