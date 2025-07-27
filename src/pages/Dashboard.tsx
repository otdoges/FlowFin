import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Plus, Download, Eye, Trash2, Settings, Users, Zap, Cube } from 'lucide-react';

const Dashboard = () => {
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
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const models = [
    {
      id: 1,
      name: "Modern Chair Design",
      status: "completed",
      progress: 100,
      thumbnail: "/lovable-uploads/02d36b81-7505-4a5b-9e63-1735894bbb66.png",
      type: "Furniture"
    },
    {
      id: 2,
      name: "Sci-Fi Spaceship",
      status: "processing",
      progress: 75,
      thumbnail: "/lovable-uploads/6f1d8fae-f221-48b9-8563-1a3a0c19843a.png",
      type: "Vehicle"
    },
    {
      id: 3,
      name: "Architectural Building",
      status: "processing",
      progress: 45,
      thumbnail: "/lovable-uploads/7fa88b56-5484-49f5-a508-dfd60325bba4.png",
      type: "Architecture"
    },
    {
      id: 4,
      name: "Character Model",
      status: "completed",
      progress: 100,
      thumbnail: "/lovable-uploads/b83a5e37-deef-435b-8cc2-ba4c3e283575.png",
      type: "Character"
    }
  ];

  const stats = [
    { label: "Models Created", value: "127", icon: Cube, color: "text-blue-500" },
    { label: "Processing", value: "3", icon: Zap, color: "text-yellow-500" },
    { label: "Downloads", value: "1.2k", icon: Download, color: "text-green-500" },
    { label: "Team Members", value: "5", icon: Users, color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <motion.header 
        className="border-b border-white/10 bg-black/20 backdrop-blur-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Prompt Pix</h1>
              <Badge variant="secondary" className="bg-purple-600/20 text-purple-300 border-purple-500/30">
                Pro
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
            </div>
          </div>
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Welcome Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Welcome back to your 3D Studio
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Create, manage, and share your AI-generated 3D models
            </p>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg">
              <Plus className="w-5 h-5 mr-2" />
              Create New Model
            </Button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-black/40 border-white/10 backdrop-blur-lg">
                <CardContent className="flex items-center p-6">
                  <div className={`p-2 rounded-lg bg-white/10 mr-4 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Recent Models */}
          <motion.div variants={itemVariants}>
            <Card className="bg-black/40 border-white/10 backdrop-blur-lg">
              <CardHeader>
                <CardTitle className="text-white text-xl">Recent Models</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {models.map((model) => (
                    <motion.div
                      key={model.id}
                      className="group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-purple-500/50 transition-colors">
                        <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-lg mb-4 overflow-hidden">
                          <img 
                            src={model.thumbnail} 
                            alt={model.name}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                        <h3 className="text-white font-medium mb-2 line-clamp-1">{model.name}</h3>
                        <div className="flex items-center justify-between mb-3">
                          <Badge variant="outline" className="text-xs border-white/20 text-gray-300">
                            {model.type}
                          </Badge>
                          <span className={`text-xs px-2 py-1 rounded ${
                            model.status === 'completed' 
                              ? 'bg-green-600/20 text-green-300' 
                              : 'bg-yellow-600/20 text-yellow-300'
                          }`}>
                            {model.status}
                          </span>
                        </div>
                        {model.status === 'processing' && (
                          <Progress value={model.progress} className="mb-3" />
                        )}
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="flex-1 text-white hover:bg-white/10">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-400 hover:bg-red-600/20">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;