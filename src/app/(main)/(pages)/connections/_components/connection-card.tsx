import React, { useMemo } from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Connection, ConnectionType } from "@/lib/constants";

type ConnectionCardProps = {
  connection: Connection;
  connected: Record<ConnectionType, boolean>;
};

const ConnectionCard: React.FC<ConnectionCardProps> = ({
  connection,
  connected,
}) => {
  const { title, description, image, type } = connection;

  const authLink = useMemo(() => {
    switch (type) {
      case "discordNode":
        return process.env.NEXT_PUBLIC_DISCORD_REDIRECT!;
      case "notionNode":
        return process.env.NEXT_PUBLIC_NOTION_AUTH_URL!;
      case "slackNode":
        return process.env.NEXT_PUBLIC_SLACK_REDIRECT!;
      default:
        return "#";
    }
  }, [type]);

  return (
    <Card className="flex w-full items-center justify-between">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Image
            src={image}
            alt={title}
            height={30}
            width={30}
            className="object-contain"
          />
        </div>
        <div>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        {connected[type] ? (
          <div className="border-bg-primary rounded-lg border-2 px-3 py-2 font-bold text-white">
            Connected
          </div>
        ) : (
          <Link
            href={authLink}
            className="rounded-lg bg-primary p-2 font-bold text-primary-foreground"
          >
            Connect
          </Link>
        )}
      </div>
    </Card>
  );
};

export default ConnectionCard;
