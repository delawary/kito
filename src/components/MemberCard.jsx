import { motion } from 'framer-motion'

const MemberCard = ({ name, role, bio, image }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass"
            style={{
                padding: '2rem',
                borderRadius: '1.5rem',
                textAlign: 'left',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}
        >
            <div style={{
                width: '100%',
                aspectRatio: '1/1',
                borderRadius: '1rem',
                overflow: 'hidden',
                background: '#eee'
            }}>
                <img src={image} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.2rem' }}>{name}</h3>
                <p className="serif" style={{ color: 'var(--color-accent)', fontSize: '0.9rem', marginBottom: '1rem' }}>{role}</p>
                <p style={{ fontSize: '0.95rem', color: 'var(--color-text-sub)', lineHeight: '1.6' }}>{bio}</p>
            </div>
        </motion.div>
    )
}

export default MemberCard
