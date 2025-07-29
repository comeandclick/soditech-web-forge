import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Upload, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from './TranslationProvider';

const WebQuoteForm = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [files, setFiles] = useState<FileList | null>(null);
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();

  const menaCountries = [
    "United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain",
    "Egypt", "Morocco", "Algeria", "Tunisia", "Libya", "Jordan", "Lebanon"
  ];

  const projectTypes = [
    "Powder Handling System",
    "Water Treatment Plant", 
    "Sludge Treatment",
    "Gas & Fume Treatment",
    "Complete Process Line",
    "Consultation & Engineering",
    "Maintenance & Service",
    "Other"
  ];

  const onSubmit = async (data: any, event: any) => {
    event.preventDefault();
    
    // Add email target
    const formData = new FormData();
    formData.append('access_key', 'aeab7b41-30f6-411e-b0dd-93ec83e5b103');
    formData.append('email', 'Y.Ibnelfadil@soditech-ltd.com');
    formData.append('from_name', 'SODITECH Contact Form');
    formData.append('subject', 'New Quote Request from SODITECH Website');
    
    // Add form fields
    Object.keys(data).forEach(key => {
      if (data[key]) {
        formData.append(key, data[key]);
      }
    });

    // Add files if any
    if (files) {
      Array.from(files).forEach((file, index) => {
        formData.append(`file_${index}`, file);
      });
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Quote Request Sent Successfully!",
          description: "Thank you for your interest. We'll contact you within 24 hours.",
          duration: 5000,
        });
        reset();
        setFiles(null);
        // Reset file input
        const fileInput = document.getElementById('file-upload') as HTMLInputElement;
        if (fileInput) fileInput.value = '';
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };

  return (
    <Card className="shadow-industrial">
      <CardHeader>
        <CardTitle className="text-xl">{t('contact.quoteForm')}</CardTitle>
        <p className="text-muted-foreground">
          {t('contact.quoteFormDesc')}
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{t('contact.fullName')} *</label>
              <Input
                {...register('name', { required: 'Name is required' })}
                placeholder="Your full name"
                className={errors.name ? 'border-red-500' : ''}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.name.message as string}
                </p>
              )}
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t('contact.emailField')} *</label>
              <Input
                type="email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                placeholder="your.email@company.com"
                className={errors.email ? 'border-red-500' : ''}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>

          {/* Company Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{t('contact.company')}</label>
              <Input
                {...register('company')}
                placeholder="Your company name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t('contact.country')} *</label>
              <Select {...register('country', { required: 'Country is required' })}>
                <SelectTrigger className={errors.country ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {menaCountries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.country && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.country.message as string}
                </p>
              )}
            </div>
          </div>

          {/* Contact & Project */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">{t('contact.phoneField')}</label>
              <Input
                {...register('phone')}
                placeholder="+971 50 763 6248"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">{t('contact.projectType')} *</label>
              <Select {...register('projectType', { required: 'Project type is required' })}>
                <SelectTrigger className={errors.projectType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.projectType && (
                <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                  <AlertCircle className="h-4 w-4" />
                  {errors.projectType.message as string}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium mb-2 block">{t('contact.projectDetails')} *</label>
            <Textarea
              {...register('message', { required: 'Project details are required' })}
              placeholder={t('contact.projectDetailsPlaceholder')}
              rows={5}
              className={errors.message ? 'border-red-500' : ''}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1 flex items-center gap-1">
                <AlertCircle className="h-4 w-4" />
                {errors.message.message as string}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label className="text-sm font-medium mb-2 block">{t('contact.techDocs')}</label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
              <p className="text-sm text-muted-foreground mb-2">
                {t('contact.techDocsDesc')}
              </p>
              <div className="flex items-center justify-center">
                <input
                  id="file-upload"
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.dwg,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button 
                  variant="outline" 
                  size="sm" 
                  type="button"
                  onClick={() => document.getElementById('file-upload')?.click()}
                >
                  {t('contact.chooseFiles')}
                </Button>
              </div>
              {files && (
                <div className="mt-3 text-sm text-muted-foreground">
                  Selected: {Array.from(files).map(f => f.name).join(', ')}
                </div>
              )}
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="bg-primary hover:bg-primary-variant flex-1 hover:scale-105 transition-transform duration-300"
            >
              {isSubmitting ? (
                <>Loading...</>
              ) : (
                <>
                  <Send className="h-5 w-5 mr-2" />
                  {t('contact.sendQuote')}
                </>
              )}
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              type="button"
              className="sm:w-auto hover:scale-105 transition-transform duration-300"
              onClick={() => window.open('tel:+971507636248', '_self')}
            >
              {t('contact.callNow')}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default WebQuoteForm;