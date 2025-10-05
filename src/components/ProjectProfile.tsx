import React from 'react';
import Card from './Card';
import { FaUser, FaHeart, FaEye, FaGlobe } from 'react-icons/fa';
import { FaTwitter, FaDiscord } from 'react-icons/fa6';

export interface ProjectProfileProps {
  name: string;
  image?: string;
  users?: string;
  followers?: string;
  watched?: string;
  icons?: React.ReactNode;
  description?: string;
  category?: string;
}


const defaultImage = 'https://ui-avatars.com/api/?name=Project&background=random';

const ProjectProfile: React.FC<ProjectProfileProps> = ({ name, image, description, category, users, followers, watched }) => {
  return (
  <Card style={{ position: 'relative', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: 340, minHeight: 340, height: 'auto', padding: 16, justifyContent: 'flex-start' }}>
      <img
        src={image || defaultImage}
        alt={name}
        loading="lazy"
        className="rounded"
        style={{
          width: '100%', maxWidth: 140, height: 'auto', aspectRatio: '1/1', objectFit: 'cover', background: '#eee', borderRadius: 12, marginBottom: 18
        }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', width: '100%', gap: 10, margin: '0 0 8px 0' }}>
        <a
          href={`/quest/${encodeURIComponent(name.toLowerCase())}`}
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#23272f',
            textDecoration: 'none',
            textAlign: 'center',
            display: 'block',
            margin: 0,
            padding: 0,
            minWidth: 0,
            maxWidth: 140,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flexShrink: 1
          }}
          className="mb-0 text-center"
          title={name}
        >
          {name}
        </a>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center', marginLeft: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0 }}>
            <FaUser style={{ color: '#23272f', fontSize: 17 }} />
            <span style={{ fontSize: 13, color: '#23272f', fontWeight: 500 }}>{users || '0'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0 }}>
            <FaHeart style={{ color: '#e74c3c', fontSize: 17 }} />
            <span style={{ fontSize: 13, color: '#e74c3c', fontWeight: 500 }}>{followers || '0'}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4, minWidth: 0 }}>
            <FaEye style={{ color: '#007bff', fontSize: 17 }} />
            <span style={{ fontSize: 13, color: '#007bff', fontWeight: 500 }}>{watched || '0'}</span>
          </div>
        </div>
      </div>
      <div style={{ marginTop: 6, width: '100%', textAlign: 'left' }}>
        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: '#23272f' }}>Project Description</h4>
        <p style={{ margin: '4px 0 0 0', fontSize: 13, color: '#444', minHeight: 32 }}>{description || 'No description provided.'}</p>
      </div>
      {/* Social Icons Bottom Right */}
      <div style={{
        position: 'absolute',
        bottom: 16,
        right: 16,
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        justifyContent: 'flex-end',
        zIndex: 2
      }}>
        <a href="#" target="_blank" rel="noopener noreferrer" title="Website">
          <FaGlobe style={{ color: '#23272f', fontSize: 22, cursor: 'pointer' }} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" title="Twitter">
          <FaTwitter style={{ color: '#1da1f2', fontSize: 22, cursor: 'pointer' }} />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer" title="Discord">
          <FaDiscord style={{ color: '#5865f2', fontSize: 22, cursor: 'pointer' }} />
        </a>
      </div>
      {/* Project Category Bottom Left */}
      {category && (
        <div style={{
          position: 'absolute',
          left: 16,
          bottom: 16,
          background: '#f3e6c7',
          color: '#23272f',
          fontWeight: 600,
          fontSize: 13,
          borderRadius: 8,
          padding: '4px 12px',
          zIndex: 2,
          boxShadow: '0 1px 4px #0001',
        }}>
          {category}
        </div>
      )}
    </Card>
  );
};

export default ProjectProfile;
