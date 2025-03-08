interface Story {
  id: number;
  username: string;
  avatar: string;
  storyImage: string;
}


interface StoryViewerProps {
  story: Story;
  onClose: () => void;
}