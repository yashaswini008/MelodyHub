const useOnPlay = (songs: any[] = [], userId?: string) => {
  // simple no-op implementation to satisfy imports
  return (id: string) => {
    // In the original app, this would play a song.
    // For now, we just log.
    if (typeof window !== "undefined") {
      console.log("Play song", id, "for user", userId);
    }
  };
};

export default useOnPlay;
