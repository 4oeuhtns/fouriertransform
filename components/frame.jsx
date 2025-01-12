"use client";
import "@/components/styles.css";

export default function Frame() {
  return (
    <div>
      <div className="fixed top-0 left-0 h-screen w-full z-50 frame">
        <div>
          <div className="absolute top-0 w-full h-3 bg-[#293b39]"/>
          <div className="absolute bottom-0 w-full h-3 bg-[#293b39]"/>
          <div className="absolute left-0 h-full w-3 bg-[#293b39]"/>
          <div className="absolute right-0 h-full w-3 bg-[#293b39]"/>
          <div className="absolute left-[11px] top-[11px] bg-[url('/assets/top_left.svg')] bg-no-repeat w-[300px] h-[78px] bg-contain"/>
          <div className="absolute right-[11px] top-[11px] bg-[url('/assets/top_left.svg')] bg-no-repeat w-[300px] h-[78px] bg-contain transform scale-x-[-1]"/>
          <div className="absolute left-[11px] bottom-[11px] bg-[url('/assets/bottom_left.svg')] bg-no-repeat w-[380px] h-[78px] bg-contain"/>
          <div className="absolute right-[11px] bottom-[11px] bg-[url('/assets/bottom_left.svg')] bg-no-repeat w-[380px] h-[78px] bg-contain transform scale-x-[-1]"/>
        </div>
      </div>
    </div>
  );
};