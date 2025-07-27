import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Github, Mail, Box } from 'lucide-react';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const floatingCubes = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30"
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3
      }}
      style={{
        left: `${10 + i * 15}%`,
        top: `${20 + Math.sin(i) * 30}%`
      }}
    />
  ));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to dashboard
      window.location.href = '/dashboard';
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden"
         style={{
           backgroundImage: 'url(/lovable-uploads/5c21d57e-d7fa-44a5-a13e-d85e12b669bf.png)',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           backgroundRepeat: 'no-repeat'
         }}>
      
      {/* Floating 3D Cubes */}
      {floatingCubes}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-md px-4"
      >
        {/* Logo */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl">
              <Box className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Prompt Pix</h1>
          <p className="text-gray-300">AI-Powered 3D Model Creation</p>
        </motion.div>

        {/* Auth Card */}
        <motion.div variants={itemVariants}>
          <Card className="bg-black/40 border-white/10 backdrop-blur-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-xl">Welcome</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="signin" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2 bg-white/10">
                  <TabsTrigger value="signin" className="text-white data-[state=active]:bg-purple-600">
                    Sign In
                  </TabsTrigger>
                  <TabsTrigger value="signup" className="text-white data-[state=active]:bg-purple-600">
                    Sign Up
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="signin" className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-white">Password</Label>
                      <div className="relative">
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Box className="w-4 h-4 mr-2" />
                        </motion.div>
                      ) : null}
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="signup" className="space-y-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-white">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-white">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signupEmail" className="text-white">Email</Label>
                      <Input
                        id="signupEmail"
                        type="email"
                        placeholder="Enter your email"
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signupPassword" className="text-white">Password</Label>
                      <div className="relative">
                        <Input
                          id="signupPassword"
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        >
                          <Box className="w-4 h-4 mr-2" />
                        </motion.div>
                      ) : null}
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </form>
                </TabsContent>

                {/* Social Login */}
                <div className="space-y-4">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-white/20" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-black/40 text-gray-400">Or continue with</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Mail className="w-4 h-4 mr-2" />
                      Google
                    </Button>
                  </div>
                </div>
              </Tabs>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="text-center mt-8">
          <p className="text-sm text-gray-400">
            By signing in, you agree to our{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-400 hover:text-purple-300 underline">
              Privacy Policy
            </a>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Auth;