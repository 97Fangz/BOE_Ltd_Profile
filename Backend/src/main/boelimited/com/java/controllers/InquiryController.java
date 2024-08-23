package com.boelimited.controllers;

import com.boelimited.models.Inquiry;
import com.boelimited.services.InquiryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class InquiryController {

    @Autowired
    private InquiryService inquiryService;

    @Autowired
    private JavaMailSender mailSender;

    @PostMapping("/contact")
    public void submitInquiry(@Valid @RequestPart("inquiry") Inquiry inquiry,
                              @RequestPart(value = "file", required = false) MultipartFile file) throws IOException {
        Inquiry savedInquiry = inquiryService.saveInquiry(inquiry, file);
        sendEmailNotification(savedInquiry);
    }

    @GetMapping("/inquiries")
    public Iterable<Inquiry> getInquiries() {
        return inquiryService.getAllInquiries();
    }

    private void sendEmailNotification(Inquiry inquiry) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("no-reply@example.com");
        message.setTo("admin@example.com");
        message.setSubject("New Contact Inquiry");
        message.setText("You have a new inquiry from: " + inquiry.getName() + "\n\n" +
                        "Subject: " + inquiry.getSubject() + "\n\n" +
                        "Message: " + inquiry.getMessage());
        mailSender.send(message);
    }
}

