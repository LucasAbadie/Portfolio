"use client";

import React from "react";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoIntroProps {
    video?: string;
}

// Utility function to extract the YouTube ID from the URL
function getYouTubeThumbnail(url: string): string | null {
    const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&\n?#]+)/);
    const videoId = match ? match[1] : null;
    return videoId
        ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
        : null;
}

export default function VideoIntro({ video }: VideoIntroProps) {
    const thumbnail = video ? getYouTubeThumbnail(video) : null;

    return (
        <div className="">
            {/* Video Player */}
            {video && (
                <div className="mb-8 lg:p-8">
                    <div className="relative aspect-video w-full max-w-4xl mx-auto">
                        <ReactPlayer
                            src={video}
                            controls
                            playing
                            light={
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    className="relative w-full h-full bg-cover bg-center cursor-pointer rounded-xl flex items-center justify-center"
                                    style={{
                                        backgroundImage: `url(${thumbnail})`,
                                    }}
                                >
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <Play size={72} />
                                    </div>
                                </motion.div>
                            }
                            width="100%"
                            height="400"
                            className="w-full object-cover scale-110 h-[400px] lg:h-[500px]"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
