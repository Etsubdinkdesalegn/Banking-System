"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Terminal, X, Code, Database, Monitor, Cpu } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DevTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [sysInfo, setSysInfo] = useState({
    os: "Loading...",
    browser: "Loading...",
    screen: "Loading...",
    apiStatus: "Checking..."
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setSysInfo({
        os: navigator.platform,
        browser: navigator.userAgent.split(" ").slice(-1)[0],
        screen: `${window.innerWidth}x${window.innerHeight}`,
        apiStatus: "Online (v1)"
      });
    }
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999]">
      {/* Floating Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Terminal className="h-6 w-6" />}
      </button>

      {/* Dev Panel */}
      <div className={cn(
        "absolute bottom-20 right-0 w-80 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden transition-all origin-bottom-right",
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
      )}>
        <div className="bg-gray-900 p-6 text-white">
          <div className="flex items-center gap-3">
             <Code className="h-5 w-5 text-cbe-green" />
             <h3 className="font-bold">CBE Dev Tools</h3>
          </div>
          <p className="text-xs text-gray-400 mt-1">Environment: Development</p>
        </div>

        <div className="p-6 space-y-4">
           <div className="flex items-start gap-4">
              <Monitor className="h-5 w-5 text-gray-400 shrink-0" />
              <div>
                 <p className="text-[10px] uppercase font-bold text-gray-400">Viewport</p>
                 <p className="text-sm font-medium">{sysInfo.screen}</p>
              </div>
           </div>

           <div className="flex items-start gap-4">
              <Database className="h-5 w-5 text-gray-400 shrink-0" />
              <div>
                 <p className="text-[10px] uppercase font-bold text-gray-400">API Gateway</p>
                 <p className="text-sm font-medium text-cbe-green">{sysInfo.apiStatus}</p>
              </div>
           </div>

           <div className="flex items-start gap-4">
              <Cpu className="h-5 w-5 text-gray-400 shrink-0" />
              <div>
                 <p className="text-[10px] uppercase font-bold text-gray-400">Platform</p>
                 <p className="text-sm font-medium">{sysInfo.os}</p>
              </div>
           </div>

           <div className="pt-4 border-t border-gray-100">
              <Button 
                variant="outline" 
                className="w-full justify-start gap-2 text-xs h-8"
                onClick={() => window.open('/_next/static', '_blank')}
              >
                 <Code className="h-3 w-3" />
                 View Static Assets
              </Button>
           </div>
        </div>
      </div>
    </div>
  );
}
