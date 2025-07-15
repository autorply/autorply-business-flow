// Avatar images
import avatar1 from '@/assets/avatars/avatar-1.jpg';
import avatar2 from '@/assets/avatars/avatar-2.jpg';
import avatar3 from '@/assets/avatars/avatar-3.jpg';
import avatar4 from '@/assets/avatars/avatar-4.jpg';
import avatar5 from '@/assets/avatars/avatar-5.jpg';
import avatar6 from '@/assets/avatars/avatar-6.jpg';
import avatar7 from '@/assets/avatars/avatar-7.jpg';
import avatar8 from '@/assets/avatars/avatar-8.jpg';
import avatar9 from '@/assets/avatars/avatar-9.jpg';

const avatars = [avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

/**
 * Get a consistent avatar for an author based on their name
 * For "فريق اوتوربلاي", uses different avatars to show team diversity
 */
export const getAuthorAvatar = (authorName: string): string => {
  // For "فريق اوتوربلاي", cycle through different avatars based on timestamp or other factor
  if (authorName === "فريق اوتوربلاي") {
    // Use current timestamp to get a pseudo-random but consistent avatar for each article
    const now = Date.now();
    const index = Math.floor((now / 86400000)) % avatars.length; // Changes daily
    return avatars[index];
  }
  
  // Create a simple hash from the author name for other authors
  let hash = 0;
  for (let i = 0; i < authorName.length; i++) {
    const char = authorName.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Use absolute value and modulo to get consistent index
  const index = Math.abs(hash) % avatars.length;
  return avatars[index];
};