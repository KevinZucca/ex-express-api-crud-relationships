const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// create a new category
exports.create = async (req, res) => {
  const data = req.body;
  const newCategory = await prisma.category.create({
    data: {
      name: data.name,
      posts: {
        connect: data.posts.map((post) => ({ id: post })),
      },
    },
  });
  res.json(newCategory);
};
