import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import SectionHeading from './ui/SectionHeading';
import { Certificate } from '../types';

interface CertificatesProps {
  certificates: Certificate[];
}

const Certificates: React.FC<CertificatesProps> = ({ certificates }) => {
  return (
    <section id="certificates" className="scroll-mt-24 py-20 bg-[#13284c]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          title="Certificates"
          subtitle="Courses and certifications I have completed"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.title}
              className="rounded-2xl border border-white/10 bg-[#0b1c33] overflow-hidden shadow-xl hover:-translate-y-1 transition-transform animate-fadeInUp"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {certificate.image && (
                <div className="h-40 overflow-hidden bg-[#13284c]/60 border-b border-white/5">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-full object-contain p-4"
                  />
                </div>
              )}

              <div className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#3db5e6] flex items-center justify-center shadow-lg shadow-[#3db5e6]/30">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">
                      {certificate.title}
                    </h3>
                    <p className="text-[#3db5e6] text-sm mt-1">{certificate.issuer}</p>
                    {certificate.period && (
                      <p className="text-white/60 text-sm mt-0.5">{certificate.period}</p>
                    )}
                  </div>
                </div>

                {certificate.description && (
                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {certificate.description}
                  </p>
                )}

                {certificate.credentialUrl && (
                  <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium text-[#3db5e6] hover:underline"
                  >
                    View Certificate
                    <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
