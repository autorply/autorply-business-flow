// Import team images
import team1 from "../assets/teams/team1.png";
import team2 from "../assets/teams/team2.png";
import team3 from "../assets/teams/team3.png";
import team5 from "../assets/teams/team5.png";
import team6 from "../assets/teams/Team6.png";
import team8 from "../assets/teams/Team8.png";
import team11 from "../assets/teams/Team11.png";

// Local team images for different team members
const avatars = [
  team1,
  team2,
  team3,
  team5,
  team6,
  team8,
  team11
];

/**
 * Get a different avatar for each article to show team diversity
 * Uses article title or slug to ensure consistent but different avatars
 */
export const getAuthorAvatar = (authorName: string, articleTitle?: string): string => {
  // For "فريق اوتوربلاي", use article title to get different avatars for each article
  if (authorName === "فريق اوتوربلاي" && articleTitle) {
    // Create hash from article title to get consistent avatar for each article
    let hash = 0;
    for (let i = 0; i < articleTitle.length; i++) {
      const char = articleTitle.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    const index = Math.abs(hash) % avatars.length;
    return avatars[index];
  }
  
  // For other authors, use author name for consistent avatar
  let hash = 0;
  const nameToHash = authorName || "default";
  for (let i = 0; i < nameToHash.length; i++) {
    const char = nameToHash.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  // Use absolute value and modulo to get consistent index
  const index = Math.abs(hash) % avatars.length;
  return avatars[index];
};