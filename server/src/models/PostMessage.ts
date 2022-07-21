import mongoose, { Schema } from 'mongoose';

interface LikeItem {
  type: number;
  default: number;
}
interface CreatedAtItem {
  type: string;
  default: string;
}

interface IPost {
  creator: string;
  title: string;
  message: string;
  selectedFile: string;
  tags: string[];
  likeCount: LikeItem;
  createdAt: CreatedAtItem;
}

const postSchema = new Schema<IPost>({
  creator: String,
  title: String,
  message: String,
  selectedFile: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
