
import { useState } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  ThumbsUp, 
  MessageSquare, 
  Share2, 
  Users, 
  User, 
  Calendar, 
  Search, 
  Video, 
  Award, 
  BookOpen,
  Send
} from 'lucide-react';

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [commentText, setCommentText] = useState('');
  
  const handlePostComment = () => {
    if (commentText.trim()) {
      // Logic to post comment would go here
      setCommentText('');
    }
  };
  
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Community Hub</CardTitle>
              <CardDescription>
                Connect with fellow sign language learners
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">John Doe</h3>
                  <p className="text-sm text-muted-foreground">ASL Enthusiast</p>
                </div>
                <div className="flex space-x-2">
                  <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">ASL</Badge>
                  <Badge variant="outline" className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">Beginner</Badge>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button className="w-full">Edit Profile</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Popular Groups</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'ASL Beginners', members: 2543, icon: '🌱' },
                { name: 'Deaf Culture & History', members: 1278, icon: '📚' },
                { name: 'Sign Language Teachers', members: 876, icon: '👨‍🏫' },
                { name: 'Interpreter Network', members: 654, icon: '🌐' }
              ].map((group, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent cursor-pointer">
                  <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md">
                    <span className="text-xl">{group.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{group.name}</p>
                    <p className="text-xs text-muted-foreground">{group.members.toLocaleString()} members</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">View All Groups</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'ASL Workshop', date: 'Tomorrow, 3:00 PM', attendees: 34 },
                { name: 'Virtual Sign Meetup', date: 'Nov 15, 5:30 PM', attendees: 28 },
                { name: 'Deaf Awareness Webinar', date: 'Nov 20, 2:00 PM', attendees: 156 }
              ].map((event, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent cursor-pointer">
                  <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{event.name}</p>
                    <p className="text-xs text-muted-foreground">{event.date} • {event.attendees} attending</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">View Calendar</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="md:w-2/4 space-y-6">
          <div className="flex space-x-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder="Search community posts and discussions..." 
                className="pl-10"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
            </div>
            <Button variant="outline">Filters</Button>
          </div>
          
          <Card>
            <CardHeader className="pb-3">
              <div className="flex space-x-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <Textarea 
                    placeholder="Share something with the community..." 
                    className="min-h-24"
                    value={commentText}
                    onChange={e => setCommentText(e.target.value)}
                  />
                </div>
              </div>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Video className="h-4 w-4 mr-2" />
                  Video
                </Button>
                <Button variant="outline" size="sm">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Resource
                </Button>
              </div>
              <Button onClick={handlePostComment}>
                <Send className="h-4 w-4 mr-2" />
                Post
              </Button>
            </CardFooter>
          </Card>
          
          <Tabs defaultValue="trending">
            <TabsList className="grid grid-cols-3 mb-6 w-full">
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="latest">Latest</TabsTrigger>
              <TabsTrigger value="following">Following</TabsTrigger>
            </TabsList>
            
            <TabsContent value="trending" className="space-y-6">
              {[
                {
                  author: 'Maria Johnson',
                  role: 'ASL Instructor',
                  avatar: 'MJ',
                  time: '2 hours ago',
                  content: 'Just uploaded a new tutorial on expressing emotions in ASL! Check it out in the resources section. Let me know if you have any questions!',
                  likes: 156,
                  comments: 28,
                  badges: ['Tutorial', 'ASL'],
                  isLiked: true
                },
                {
                  author: 'David Chen',
                  role: 'Community Moderator',
                  avatar: 'DC',
                  time: '6 hours ago',
                  content: 'We\'re organizing a virtual sign language exchange session this Friday. It\'s a great opportunity to practice with people from around the world. Sign up through the events page!',
                  likes: 89,
                  comments: 42,
                  badges: ['Event', 'Practice'],
                  isLiked: false
                },
                {
                  author: 'Sarah Williams',
                  role: 'Beginner',
                  avatar: 'SW',
                  time: '1 day ago',
                  content: 'Does anyone have advice on how to distinguish between similar signs? I keep mixing up "work" and "play" in ASL.',
                  likes: 34,
                  comments: 56,
                  badges: ['Question', 'ASL'],
                  isLiked: false
                }
              ].map((post, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex space-x-4">
                      <Avatar>
                        <AvatarFallback>{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{post.author}</p>
                            <p className="text-xs text-muted-foreground">{post.role} • {post.time}</p>
                          </div>
                          <div className="flex space-x-1">
                            {post.badges.map((badge, i) => (
                              <Badge key={i} variant="outline" className="text-xs bg-primary/10">{badge}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p>{post.content}</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex w-full justify-between">
                      <Button variant="ghost" size="sm" className={post.isLiked ? "text-primary" : ""}>
                        <ThumbsUp className="h-4 w-4 mr-2" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        {post.comments}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="latest" className="space-y-6">
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex space-x-4">
                    <Avatar>
                      <AvatarFallback>LR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold">Lisa Rodriguez</p>
                          <p className="text-xs text-muted-foreground">Interpreter • Just now</p>
                        </div>
                        <Badge variant="outline" className="text-xs bg-primary/10">BSL</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>I just published a comparison between BSL and ASL fingerspelling. Surprising differences!</p>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full justify-between">
                    <Button variant="ghost" size="sm">
                      <ThumbsUp className="h-4 w-4 mr-2" />
                      3
                    </Button>
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      0
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </CardFooter>
              </Card>
              <p className="text-center text-muted-foreground">Loading more posts...</p>
            </TabsContent>
            
            <TabsContent value="following" className="space-y-6">
              <div className="py-12 text-center">
                <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">Follow some creators</h3>
                <p className="text-muted-foreground mb-6">Follow community members to see their posts here.</p>
                <Button>Discover People to Follow</Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="md:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Top Contributors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { name: 'Emily Chen', role: 'ASL Teacher', posts: 156, followers: '3.2K', avatar: 'EC' },
                { name: 'Mark Wilson', role: 'Interpreter', posts: 89, followers: '2.1K', avatar: 'MW' },
                { name: 'James Lee', role: 'Deaf Activist', posts: 74, followers: '5.7K', avatar: 'JL' },
                { name: 'Sophia Garcia', role: 'Content Creator', posts: 62, followers: '1.8K', avatar: 'SG' }
              ].map((user, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback>{user.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.role}</p>
                  </div>
                  <div className="text-right text-xs">
                    <p className="font-medium">{user.followers}</p>
                    <p className="text-muted-foreground">followers</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">View Leaderboard</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Latest Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'ASL Alphabet Master', user: 'John D.', time: '2 hours ago', icon: '🥇' },
                { title: '30-Day Streak', user: 'Lisa R.', time: '1 day ago', icon: '🔥' },
                { title: 'Community Helper', user: 'Mark W.', time: '2 days ago', icon: '🌟' }
              ].map((achievement, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md">
                    <span className="text-xl">{achievement.icon}</span>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{achievement.title}</p>
                    <p className="text-xs text-muted-foreground">{achievement.user} • {achievement.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">Your Achievements</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Learning Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { title: 'ASL Fingerspelling Guide', views: '12K', type: 'PDF' },
                { title: 'Common Phrases in BSL', views: '8.5K', type: 'Video' },
                { title: 'Sign Language Etiquette', views: '6.2K', type: 'Article' }
              ].map((resource, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-md hover:bg-accent cursor-pointer">
                  <div className="h-10 w-10 flex items-center justify-center bg-primary/10 rounded-md">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{resource.title}</p>
                    <p className="text-xs text-muted-foreground">{resource.views} views • {resource.type}</p>
                  </div>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">View Library</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;
