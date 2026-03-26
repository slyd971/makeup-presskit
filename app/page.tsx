import { redirect } from "next/navigation";

import { getDefaultMakeupArtist } from "@/data/makeupArtists";

export default function HomePage() {
  redirect(`/${getDefaultMakeupArtist()?.slug ?? ""}`);
}
